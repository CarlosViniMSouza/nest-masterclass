import { Length, IsNotEmpty } from 'class-validator';

export class CreateEmployeeBody {
    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: 'The member function should not be empty'
    })

    occupation: string;
}