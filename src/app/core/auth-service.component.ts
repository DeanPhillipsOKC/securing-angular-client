import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { UserManager, User } from 'oidc-client';
import { Constants } from '../constants';

@Injectable({ providedIn: CoreModule })
export class AuthService {
    private _user: User;
    private _userManager: UserManager;

    constructor() {
        this._userManager = new UserManager({
            authority: Constants.stsAuthority,
            client_id: Constants.clientId,
            redirect_uri: `${Constants.clientRoot}signin-callback`,
            scope: 'openid profile projects-api',
            response_type: 'code',
            post_logout_redirect_uri: `${Constants.clientRoot}signout-callback`
        });
    }
}
