import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main/main.component";
import {NewMusicComponent} from "./components/new-music/new-music.component";

const routes:Routes = [
  {path: '', component: MainComponent},
  {path: 'newmusic', component: NewMusicComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule{

}
