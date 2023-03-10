import { BuildPaths } from 'config/build/types/config';
import path from 'path';
import { Configuration as wbConfiguration, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default function ({ config }: {config: wbConfiguration}) {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve.modules.push(paths.src);
  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': paths.src,
  };
  config.resolve.extensions.push('.tsx', '.ts');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildCssLoader(true));

  return config;
}
