/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { memoizeFunction } from '@uifabric/utilities';
import { borderStylePopOver } from '../../util/styles/borders';

export const getCalloutStyles = memoizeFunction(() => () => ({
  root: borderStylePopOver,
}));
