import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListAdminsService from '../services/admin/ListAdminsService';
import CreateAdminService from '../services/admin/CreateAdminService';
import UpdateAdminService from '../services/admin/UpdateAdminService';
import DeleteAdminService from '../services/admin/DeleteAdminService';
import ShowAdminService from '../services/admin/ShowAdminService';

class AdminsController {
  // Buscando um administrador pelo id
  public async show(request: Request, response: Response): Promise<Response> {
    // Recuperando o id do administrador nos parâmetros da requisição
    const { id } = request.params;

    // Executando o serviço para busca do administrador
    const showAdminService = container.resolve(ShowAdminService);

    const findedAdmin = await showAdminService.execute(id);

    return response.json(findedAdmin);
  }

  // Listando todos os administradores
  public async get(request: Request, response: Response): Promise<Response> {
    const listAdminsService = container.resolve(ListAdminsService);

    const adminList = await listAdminsService.execute();

    return response.json(adminList);
  }

  // Criando um novo administrador
  public async create(
    request: Request,
    response: Response,
  ): Promise<Response> {
    // Recebendo os dados para a criação do administrador
    const {
      name,
      username,
      password,
      permission_create_admin,
    } = request.body;

    const { id: authenticated_user_id } = request.user;

    // Serviço para a criação do administrador
    const createAdminService = container.resolve(CreateAdminService);

    const admin = await createAdminService.execute({
      name,
      username,
      password,
      permission_create_admin,
      authenticated_user_id,
    });

    return response.status(201).json(admin);
  }

  // Atualizando um administrador
  public async update(
    request: Request,
    response: Response,
  ): Promise<Response> {
    // Recebendo os dados para atualizar os dados de um administrador
    const { id } = request.params;
    const {
      name,
      username,
      current_password,
      new_password,
    } = request.body;

    // Serviço para a atualização dos dados do montador
    const updateAdminService = container.resolve(UpdateAdminService);

    const userUpdated = await updateAdminService.execute({
      id,
      name,
      username,
      current_password,
      new_password,
    });

    return response.status(201).json(userUpdated);
  }

  // Apagando um administrador
  public async delete(
    request: Request,
    response: Response,
  ): Promise<Response> {
    // Recebendo a referência do administrador que vai ser removido
    const { id } = request.params;

    // Serviço para a remoção do administrador
    const deleteAdminService = container.resolve(DeleteAdminService);

    const responseMessage = await deleteAdminService.execute(id);

    return response.json({ message: responseMessage });
  }
}

export default AdminsController;
