import { VisualizeEmbeddableFactory } from './visualize_embeddable_factory';
import { EmbeddableFactoriesRegistryProvider } from 'ui/embeddable/embeddable_factories_registry';

export function visualizeEmbeddableFactoryProvider(Private) {
  const VisualizeEmbeddableFactoryProvider = (
    $compile,
    $rootScope,
    savedVisualizations,
    timefilter,
    Notifier,
    Promise,
    Private) => {
    return new VisualizeEmbeddableFactory($compile, $rootScope, savedVisualizations, timefilter, Notifier, Promise, Private);
  };
  return Private(VisualizeEmbeddableFactoryProvider);
}

EmbeddableFactoriesRegistryProvider.register(visualizeEmbeddableFactoryProvider);
