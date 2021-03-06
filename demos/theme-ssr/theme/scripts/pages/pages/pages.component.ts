import { PageComponent, HttpError } from "@ribajs/ssr";
import { TemplateFunction } from "@ribajs/core";

import pugTemplate from "./pages.component.pug";

export interface Scope {
  title: string;
  content: string;
  params: PagesPageComponent["ctx"]["params"];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = true;
  protected autobind = true;

  scope: Scope = {
    title: "[ params.handle | capitalize ]",
    content: "<p>We are [ params.handle ]!</a>",
    params: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(PagesPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx.params.handle;

    if (this.ctx.params.handle === "simulate-404") {
      throw new HttpError("Simulated 404 not found error!", 404);
    }

    if (this.ctx.params.handle === "simulate-500") {
      console.error("Start simulate 500 internal error..");
      throw new HttpError("Simulated 500 internal error!", 500);
    }
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template(): ReturnType<TemplateFunction> {
    return pugTemplate(this.scope);
  }
}
