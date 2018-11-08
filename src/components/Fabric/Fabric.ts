/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

/**
 * The `Fabric` component is provided directly by the Fabric library and manages typography and
 * other styles for the entire nested app. It manages styles dynamically, changing some classes as
 * elements receive and lose focus. Eventually, as Fabric continues to adopt Glamor, it will set
 * language-specific fonts. All visible markup should be wrapped in a single `Fabric` component.
 */
export default Fabric;
