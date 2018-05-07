/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });
