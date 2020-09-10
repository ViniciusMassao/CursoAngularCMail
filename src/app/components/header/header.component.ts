import { Component } from "@angular/core";
import { PageDataService } from "../../services/page-data.service";
import { HeaderDataService } from "../../services/header-data.service";


@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})
export class HeaderComponent {
    private _isMenuOpen = false;

    tituloDaPagina = 'CMail';	//	Nova	propriedade.

    constructor(private pageDataService: PageDataService,
        private headerDataService: HeaderDataService) {
        //	Assinando	titulo	de	PageDataService.
        this.pageDataService
            .titulo
            .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

    handleBuscaChanges({ target }) {
        this.headerDataService.atualizarTermoDeFiltro(target.value)
    }

}