import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import FileBase from 'react-file-base64';

import useStyle from './styles';
import { createPost, updatePost } from '../..actions/posts';
