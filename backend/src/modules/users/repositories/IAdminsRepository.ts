import ICreateAdminDTOS from '../dtos/ICreateAdminDTOS';
import Admin from '../infra/typeorm/entities/Admin';

interface IAdminsRepository {
    findByUsername(username: string): Promise<Admin | undefined>;
    create(data: ICreateAdminDTOS): Promise<Admin>;
    delete(id: string): Promise<string>;
    list(): Promise<Admin[]>;
    update(data: ICreateAdminDTOS): Promise<Admin>;
}

export default IAdminsRepository;
