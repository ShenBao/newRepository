import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Code404Component } from './code404/code404.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

import { Http000Component } from './http/http000/http000.component';
import { Http001Component } from './http/http001/http001.component';
import { Http002Component } from './http/http002/http002.component';
import { Http003Component } from './http/http003/http003.component';
import { Http004Component } from './http/http004/http004.component';
import { Http005Component } from './http/http005/http005.component';
import { Http006Component } from './http/http006/http006.component';

import { Component001Component } from './component/component001/component001.component';
import { Component002Component } from './component/component002/component002.component';
import { Component003Component } from './component/component003/component003.component';
import { Component004Component } from './component/component004/component004.component';
import { Component005Component } from './component/component005/component005.component';
import { Component006Component } from './component/component006/component006.component';
import { Component007Component } from './component/component007/component007.component';
import { Component008Component } from './component/component008/component008.component';
import { Component009Component } from './component/component009/component009.component';
import { Component010Component } from './component/component010/component010.component';
import { Component011Component } from './component/component011/component011.component';
import { Component012Component } from './component/component012/component012.component';
import { Component013Component } from './component/component013/component013.component';
import { Component014Component } from './component/component014/component014.component';
import { Component015Component } from './component/component015/component015.component';

import { Router001Component } from './router/router001/router001.component';
import { Router002Component } from './router/router002/router002.component';
import { Router003Component } from './router/router003/router003.component';
import { Router004Component } from './router/router004/router004.component';
import { Router005Component } from './router/router005/router005.component';
import { Router006Component } from './router/router006/router006.component';
import { Router007Component } from './router/router007/router007.component';
import { Router008Component } from './router/router008/router008.component';
import { Router009Component } from './router/router009/router009.component';
import { Router009Children001Component } from './router/router009/router009.children001/router009.children001.component';
import { Router009Children002Component } from './router/router009/router009.children002/router009.children002.component';
import { Router010Component } from './router/router010/router010.component';
import { Router010children001Component } from './router/router010/router010children001/router010children001.component';
import { Router010children002Component } from './router/router010/router010children002/router010children002.component';
import { Router011Component } from './router/router011/router011.component';
import { LoginGuard } from "./guard/login.guard";
import { Router012Component } from './router/router012/router012.component';
import { UnsavedGuard } from "./guard/unsaved.guard";
import { Router013Component } from './router//router013/router013.component';
import { ProductResolveGuard } from "./guard/product.guard";
import { Router014Component } from './router/router014/router014.component';
import { Router014children001Component } from './router/router014/router014children001/router014children001.component';
import { Router014children002Component } from './router/router014/router014children002/router014children002.component';
import { Router15Component } from './router/router15/router15.component';

import { Observable001Component } from './rxjs/observable001/observable001.component';

import { Pipe001Component } from './pipe/pipe001/pipe001.component';

import { Communication001Component } from './communication/communication001/communication001.component';
import { Communication002Component } from './communication/communication002/communication002.component';
import { Communication003Component } from './communication/communication003/communication003.component';
import { Communication004Component } from './communication/communication004/communication004.component';

import { Lifecycle001Component } from './lifecycle/lifecycle001/lifecycle001.component';
import { Lifecycle002Component } from './lifecycle/lifecycle002/lifecycle002.component';
import { Lifecycle003Component } from './lifecycle/lifecycle003/lifecycle003.component';
import { Lifecycle004Component } from './lifecycle/lifecycle004/lifecycle004.component';
import { Lifecycle005Component } from './lifecycle/lifecycle005/lifecycle005.component';
import { Lifecycle006Component } from './lifecycle/lifecycle006/lifecycle006.component';
import { Lifecycle006children001Component } from './lifecycle/lifecycle006/lifecycle006children001/lifecycle006children001.component';
import { Lifecycle006children002Component } from './lifecycle/lifecycle006/lifecycle006children002/lifecycle006children002.component';

import { Form001Component } from './form/form001/form001.component';
import { Form002Component } from './form/form002/form002.component';
import { Form003Component } from './form/form003/form003.component';
import { Form004Component } from './form/form004/form004.component';
import { Form005Component } from './form/form005/form005.component';

import { Ts001Component } from './ts/ts001/ts001.component';

import { Service001Component } from './service/service001/service001.component';
import { Service002Component } from './service/service002/service002.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/index', //重定向路由
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'service001',
    component: Service001Component
  },
  {
    path: 'service002',
    component: Service002Component
  },
  {
    path: 'http000',
    component: Http000Component
  },
  {
    path: 'http001',
    component: Http001Component
  },
  {
    path: 'http002',
    component: Http002Component
  },
  {
    path: 'http003',
    component: Http003Component
  },
  {
    path: 'http004',
    component: Http004Component
  },
  {
    path: 'http005',
    component: Http005Component
  },
  {
    path: 'http006',
    component: Http006Component
  },
  {
    path: 'component001',
    component: Component001Component
  },
  {
    path: 'component002',
    component: Component002Component
  },
  {
    path: 'component003',
    component: Component003Component
  },
  {
    path: 'component004',
    component: Component004Component
  },
  {
    path: 'component005',
    component: Component005Component
  },
  {
    path: 'component006',
    component: Component006Component
  },
  {
    path: 'component007',
    component: Component007Component
  },
  {
    path: 'component008',
    component: Component008Component
  },
  {
    path: 'component009',
    component: Component009Component
  },
  {
    path: 'component010',
    component: Component010Component
  },
  {
    path: 'component011',
    component: Component011Component
  },
  {
    path: 'component012',
    component: Component012Component
  },
  {
    path: 'component013',
    component: Component013Component
  },
  {
    path: 'component014',
    component: Component014Component
  },
  {
    path: 'component015',
    component: Component015Component
  },
  {
    path: 'router001',
    component: Router001Component
  },
  {
    path: 'router002',
    component: Router002Component
  },
  {
    path: 'router003',
    component: Router003Component
  },
  {
    path: 'router004',
    component: Router004Component
  },
  {
    path: 'router005/:id',
    component: Router005Component
  },
  {
    path: 'router006/:id',
    component: Router006Component
  },
  {
    path: 'router007',
    component: Router007Component
  },
  {
    path: 'router008',
    component: Router008Component
  },
  {
    path: 'redirectToRouter001',
    redirectTo: '/router001', //重定向路由
    pathMatch: 'full'
  },
  {
    path: 'router009',
    component: Router009Component,
    children: [
      {
        path: '',
        component: Router009Children001Component,
      },
      {
        path: 'children/:id',
        component: Router009Children002Component
      }
    ]
  },
  {
    path: 'router010',
    component: Router010Component,
    children: [
      {
        path: '',
        component: Router010children001Component,
      },
      {
        path: 'router010chilren002',
        component: Router010children002Component,
        outlet: "aux"
      }
    ]
  },
  {
    path: 'router011',
    component: Router011Component,
    canActivate: [LoginGuard],
  },
  {
    path: 'router012',
    component: Router012Component,
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'router013/:id',
    component: Router013Component,
    resolve: {
      product: ProductResolveGuard
    },
  },
  {
    path: 'router014',
    component: Router014Component,
    children: [
      {
        path: '',
        redirectTo: 'children1', //重定向路由
        pathMatch: 'full'
      },
      {
        path: 'children1',
        component: Router014children001Component,
      },
      {
        path: 'children2',
        component: Router014children002Component
      },
      {   /*匹配不到路由的时候加载的组件*/
        path: '**',  /*任意的路由*/
        component: Code404Component
      }
    ]
  },
  {
    path: 'router015',
    component: Router15Component,
  },
  {
    path: 'observable001',
    component: Observable001Component
  },
  {
    path: 'pipe001',
    component: Pipe001Component
  },
  {
    path: 'communication001',
    component: Communication001Component
  },
  {
    path: 'communication002',
    component: Communication002Component
  },
  {
    path: 'communication003',
    component: Communication003Component
  },
  {
    path: 'communication004',
    component: Communication004Component
  },
  {
    path: 'lifecycle001',
    component: Lifecycle001Component
  },
  {
    path: 'lifecycle002',
    component: Lifecycle002Component
  },
  {
    path: 'lifecycle003',
    component: Lifecycle003Component
  },
  {
    path: 'lifecycle004',
    component: Lifecycle004Component
  },
  {
    path: 'lifecycle005',
    component: Lifecycle005Component
  },
  {
    path: 'lifecycle006',
    component: Lifecycle006Component,
    children: [
      {
        path: '',
        component: Lifecycle006children001Component,
      },
      {
        path: 'children2',
        component: Lifecycle006children002Component
      }
    ]
  },
  {
    path: 'form001',
    component: Form001Component
  },
  {
    path: 'form002',
    component: Form002Component
  },
  {
    path: 'form003',
    component: Form003Component
  },
  {
    path: 'form004',
    component: Form004Component
  },
  {
    path: 'form005',
    component: Form005Component
  },
  {
    path: 'ts001',
    component: Ts001Component
  },
  {
    path: '**',
    component: Code404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      // enableTracing: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
