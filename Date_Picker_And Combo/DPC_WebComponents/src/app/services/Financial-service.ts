import { Financial } from '../static-data/financial';

class FinancialService {
	public getData(tableName: string): any[] {
		return Financial[tableName];
	}
}
export const financialService: FinancialService = new FinancialService();
