import mock from 'mock-fs';
import jsBeautifyQuick from '..';


jest.mock('execa');

afterEach(() => mock.restore());

test('throws an error when no vcs is found', () => {
    mock({
        'root/README.md': '',
    });

    expect(() => jsBeautifyQuick('root')).toThrowError(
        'Unable to detect a source control manager.'
    );
});