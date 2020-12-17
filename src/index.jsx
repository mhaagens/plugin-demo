import App from "./app";
import React from 'react';
import { render } from 'react-dom';

export function mount(id) {
 render(<App />, document.getElementById(id));
}

export default mount;
