import { getRepository, Repository } from 'typeorm';
import ICustomersRepository from '../ICustomersRepository';
import Customer from '../../entities/Customer';
import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';

class CustomersRepository implements ICustomersRepository {
    private repository: Repository<Customer>;

    constructor() {
      this.repository = getRepository(Customer);
    }

    // Buscando um cliente pelo id
    public async findById(id: string): Promise<Customer | undefined> {
      const customer = await this.repository.findOne(id);

      return customer;
    }

    // Listando os clientees
    public async list(): Promise<Customer[]> {
      const customersList = await this.repository.find();

      return customersList;
    }

    // Salvando um cliente no banco de dados
    public async create({
      send_contact_alert,
      name,
      phone,
      document,
      last_contact_date,
      next_contact_date,
    }: ICreateCustomerDTO): Promise<Customer> {
      const createdCustomer = this.repository.create({
        send_contact_alert,
        name,
        phone,
        document,
        last_contact_date,
        next_contact_date,
      });
      await this.repository.save(createdCustomer);

      return createdCustomer;
    }

    // Atualizando um cliente
    public async update({
      id,
      send_contact_alert,
      name,
      phone,
      document,
      last_contact_date,
      next_contact_date,
    }: ICreateCustomerDTO): Promise<Customer> {
      const updatedCustomer = await this.repository.save({
        id,
        send_contact_alert,
        name,
        phone,
        document,
        last_contact_date,
        next_contact_date,
      });

      return updatedCustomer;
    }

    // Apagando um cliente
    public async delete(id: string): Promise<string> {
      await this.repository.softDelete(id);

      return 'Cliente removido';
    }
}

export default CustomersRepository;
