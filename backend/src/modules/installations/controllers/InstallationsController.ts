import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInstallationsService from '../services/CreateInstallationsService';
import DeleteInstallationService from '../services/DeleteInstallationService';
import ListInstallationsServices from '../services/ListInstallationsServices';
import UpdateInstallationService from '../services/UpdateInstallationService';

class InstallationsController {
  public async get(request: Request, response: Response): Promise<Response> {
    // Executando o serviço de listagem das instalações
    const listInstallationsServices = container.resolve(ListInstallationsServices);

    const installationsList = await listInstallationsServices.execute();

    return response.json(installationsList);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // Recuperando os dados da instalação na requisição
    const {
      order_id,
      done,
      start_date,
      end_date,
      completion_forecast,
      price,
      assemblers_installation,
    } = request.body;

    // Executando o serviço para o cadastro de instalação
    const createInstallationsService = container.resolve(CreateInstallationsService);

    const createdInstallation = await createInstallationsService.execute({
      order_id,
      done,
      start_date,
      end_date,
      completion_forecast,
      price,
      assemblers_installation,
    });

    return response.status(201).json(createdInstallation);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    // Recuperando os dados da instalação na requisição
    const { id } = request.params;
    const {
      done,
      start_date,
      end_date,
      completion_forecast,
      price,
      assemblers_installation,
    } = request.body;

    // Executando o serviço para o cadastro de instalação
    const updateInstallationsService = container.resolve(UpdateInstallationService);

    const updatedInstallation = await updateInstallationsService.execute({
      id,
      done,
      start_date,
      end_date,
      completion_forecast,
      price,
      assemblers_installation,
    });

    return response.status(201).json(updatedInstallation);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    // Recuperando o id da instalação nos parâmetros da requisição
    const { id } = request.params;

    // Executando o serviço para apagar a instalação
    const deleteInstallationService = container.resolve(DeleteInstallationService);

    const responseMessage = await deleteInstallationService.execute(id);

    return response.json(responseMessage);
  }
}

export default InstallationsController;
