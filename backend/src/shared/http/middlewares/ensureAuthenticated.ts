import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../../../configs/authConfig';
import AdminsRepository from '../../../modules/users/typeorm/repositories/AdminsRepository';
import AssemblersRepository from '../../../modules/users/typeorm/repositories/AssemblersRepository';
import AppError from '../../errors/AppError';

interface ITokenPayload {
  sub: string;
}

// Middleware para garantir que o usuário esteja autenticado para realizar a requisição
const ensureAuthenticated = async (
  request: Request, response: Response, next: NextFunction,
): Promise<void> => {
  // Recuperando o token de autenticação
  const bearerToken = request.headers.authorization;

  if (!bearerToken) {
    throw new AppError('Token not found.', 404);
  }

  const [, token] = bearerToken.split(' ');

  // Verificando se o token é válido, caso contrário lançar um erro
  try {
    const { secret } = authConfig.token;

    const { sub: user_id } = verify(token, secret) as ITokenPayload;

    // Verificando se o usuário existe pelo seu id
    const adminsRepository = new AdminsRepository();
    const assemblersRepository = new AssemblersRepository();

    const user = (
      await adminsRepository.findById(user_id)
      || await assemblersRepository.findById(user_id)
    );

    if (!user) {
      throw new AppError('User not found.', 404);
    }

    // Salvando os dados do usuário na requisição
    request.user = {
      id: user.id,
      user_type: user.getUserType(),
    };

    // Continuando a requisição
    next();
  } catch (error) {
    throw new AppError(error.message);
  }
};

export default ensureAuthenticated;
