import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['i.pravatar.cc','images.unsplash.com']
    }
};

export default nextConfig;
