import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogBlogModule } from './blog/blog.module';
import { BlogTagModule } from './tag/tag.module';
import { BlogEntryModule } from './entry/entry.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogBlogModule,
        BlogTagModule,
        BlogEntryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
