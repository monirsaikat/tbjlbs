/**
 * Factory — wires concrete implementations to interfaces.
 * This is the only file that knows about concrete classes.
 * Swap implementations (e.g. mock for tests) here — nothing else changes.
 */
import { AuthRemoteDataSource } from '../../data/datasources/remote';
import { AuthLocalDataSource }  from '../../data/datasources/local';
import { AuthRepository }       from '../../data/repositories';
import { AuthService }          from '../services';

const authRemote     = new AuthRemoteDataSource();
const authLocal      = new AuthLocalDataSource();
const authRepository = new AuthRepository(authRemote, authLocal);

export const authService = new AuthService(authRepository);
