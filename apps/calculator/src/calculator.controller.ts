import { Controller, Get } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller()
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  getHello(): string {
    return this.calculatorService.getHello();
  }
}
