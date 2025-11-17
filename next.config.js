/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    webpack(config) {
        // Добавляем поддержку импорта SVG как React-компонентов
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;