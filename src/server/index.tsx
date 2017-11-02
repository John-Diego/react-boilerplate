import { Request, Response } from 'express';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { renderToString } from 'react-dom/server';

import { Home } from '../client/components/home'

const app = require('express')();

app.get('/', (req: Request,res: Response) => {
    const content = renderToString(<Home/>);
    res.send(content);
});

app.listen(3000, () => { });
