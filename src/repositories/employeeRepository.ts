export abstract class EmployeeRepository {
    abstract create(
        name: string, occupation: string
    ): Promise<void>;
}