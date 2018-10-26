const jsBeautifyMock = {
    format: jest.fn().mockImplementation(input => 'formatted:' + input),
    resolveConfig: {
        sync: jest.fn().mockImplementation(file => ({
            file
        })),
    },
    getSupportInfo: jest.fn().mockReturnValue({
        languages: [{
            name: 'JavaScript',
            extensions: ['.js'],
        }, {
            name: 'HTML',
            extensions: ['.html'],
        }, {
            name: 'CSS',
            extensions: ['.css'],
        }],
    }),
};

module.exports = jsBeautifyMock;