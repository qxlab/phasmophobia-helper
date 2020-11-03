import produce, { Draft } from 'immer';
import { concat } from 'lodash-es';
import { List } from 'immutable';

export type GraphConnection<T> = { source: T; target: T };
export type GraphData<T> = {
  values: T[];
  connections: GraphConnection<T>[];
};
export type Graph<T extends string> = Readonly<{
  data: GraphData<T>;
  add(v: T | T[]): Graph<T>;
  connect(v1: T, v2: T | T[]): Graph<T>;
  getConnections(v: T): List<T>;
}>;

let initialData = {
  values: [],
  connections: [],
};
export let DataStoreGraph = <T extends string>(
  data: GraphData<T> = initialData,
): Graph<T> => ({
  data,
  add: (v) =>
    DataStoreGraph(
      produce(data, (draft) => {
        draft.values = concat(draft.values, v as Draft<T>);
      }),
    ),
  connect: (v1, v2) =>
    DataStoreGraph(
      produce(data, (draft) => {
        if (Array.isArray(v2)) {
          v2.forEach((it) =>
            draft.connections.push({
              source: v1 as Draft<T>,
              target: it as Draft<T>,
            }),
          );
          return;
        }
        draft.connections.push({
          source: v1 as Draft<T>,
          target: v2 as Draft<T>,
        });
      }),
    ),
  getConnections: (v) =>
    data.connections.reduce((acc, it) => {
      if (it.target === v) {
        return acc.push(it.source);
      }
      if (it.source === v) {
        return acc.push(it.target);
      }
      return acc;
    }, List()),
});
