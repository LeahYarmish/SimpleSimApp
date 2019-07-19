import { Rule, SchematicContext, Tree, url, apply ,template , mergeWith} from '@angular-devkit/schematics';
import { strings} from '@angular-devkit/core';

import { SchemaOptions } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.

// before files

// export function table(_options: SchemaOptions): Rule {
//   return (tree: Tree, _context: SchematicContext) => {
//     const { name } = _options;
//     tree.create('table.js', `console.log('hello ${name}');`);
//     return tree;
//   };
// }


export function table(_options: SchemaOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates = url('./files');
    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
      })
    ]);

    return mergeWith(sourceParameterizedTemplates)(tree, _context)
  };
}