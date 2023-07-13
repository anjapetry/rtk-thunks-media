import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'users/fetch', async () => {
        const response = await axios.get('http://localhost:3005/users');// axios is a library for making HTTP requests;
        return response.data;
    });