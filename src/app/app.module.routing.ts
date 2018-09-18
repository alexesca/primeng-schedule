import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { PipelineContainer } from '../features/pipeline/container/pipeline.component';

export const routes: Routes = [
    { path: 'pipeline', component: PipelineContainer },
    { path: 'estimator', loadChildren: 'src/app/features/estimate/estimate.module#EstimateModule' },
    { path: '', redirectTo: '/pipeline', pathMatch: 'full' },
    // { path: '**', component: PipelineContainer },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    providers: [RouterLink]
})
export class AppRoutingModule {
}