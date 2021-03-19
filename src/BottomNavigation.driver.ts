import { screen } from '@testing-library/react';

export default class BottomNavigationDriver {
    public getTabByTestId =  async (testId: string) => screen.findByTestId(testId)
}