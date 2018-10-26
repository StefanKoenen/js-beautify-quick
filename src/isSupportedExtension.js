import {
    extname
} from 'path';

const extensions = ['.css', '.html', '.js'];

export default file => extensions.includes(extname(file));