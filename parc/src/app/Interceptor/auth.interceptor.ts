import { HttpInterceptorFn } from '@angular/common/http';
import { UserInterface } from '../Interface/user.interface';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  let user: UserInterface|null = null;
  if (localStorage.getItem('user') != null && localStorage.getItem('user') != "") {
    user = JSON.parse(localStorage.getItem('user')!) as UserInterface;
  }
  request = request.clone({
    setHeaders: {
      Authorization: user ? `Token ${user.token}` : '',
    },
  });

  return next(request);
};