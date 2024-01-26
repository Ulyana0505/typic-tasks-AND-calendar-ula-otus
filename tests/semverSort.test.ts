import { semverSort } from '../src/semverSort';

// ---5---
describe('test of semverSort', () => {
    it('should return right sorted arr with 7 strings', () => {
        expect(
            semverSort([
                '1.0.5',
                '2.5.0',
                '0.12.0',
                '1',
                '1.23.45',
                '1.4.50',
                '1.2.3.4.5.6.7',
            ])
        ).toEqual([
            '0.12.0',
            '1',
            '1.0.5',
            '1.2.3.4.5.6.7',
            '1.4.50',
            '1.23.45',
            '2.5.0',
        ])
    });
    it('should return right sorted arr with 5 strings', () => {
        expect(
            semverSort([
                '1.5.0',
                '0.12.0',
                '1',
                '1.23.45',
                '1.4.50',
            ])
        ).toEqual([
            '0.12.0',
            '1',
            '1.4.50',
            '1.5.0',
            '1.23.45',
        ])
    });
    it('should return right sorted arr with 8 strings', () => {
        expect(
            semverSort([
                '1.5.0',
                '0.12.0',
                '1',
                '1.23.45',
                '1.4.50',
                '0.3.0',
                '1.21.2',
                '1.1.1',
            ])
        ).toEqual([
            '0.3.0',
            '0.12.0',
            '1',
            '1.1.1',
            '1.4.50',
            '1.5.0',
            '1.21.2',
            '1.23.45',
        ])
    });
})
