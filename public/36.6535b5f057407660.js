"use strict";(self.webpackChunkmy_first_app=self.webpackChunkmy_first_app||[]).push([[36],{1036:(L,m,p)=>{p.r(m),p.d(m,{RecipesModule:()=>J});var o=p(4006),s=p(2121),e=p(5062),u=p(5496),l=p(6895);const f=function(t){return[t]};let Z=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(5,f,n.index)),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH))},dependencies:[s.yS,s.Od]}),t})();function R(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=r.index;e.Q6J("recipe",r.$implicit)("index",n)}}let _=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.router=n,this.route=c}ngOnInit(){this.subscription=this.recipeService.recipesChanged.subscribe(i=>{this.recipes=i}),this.recipes=this.recipeService.getRecipes()}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(s.F0),e.Y36(s.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,R,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},dependencies:[l.sg,Z]}),t})(),C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[s.lC,_]}),t})();var T=p(2986),A=p(4850),S=p(5599);let F=(()=>{class t{constructor(i,n){this.authService=i,this.router=n}canActivate(i,n){return this.authService.user.pipe((0,T.q)(1),(0,A.U)(c=>!!c||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(S.e),e.LFG(s.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"p"),e._uU(1,"Please seclect a Recipe!"),e.qZA())}}),t})();function y(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",18)(1,"div",19),e._UZ(2,"input",20),e.qZA(),e.TgZ(3,"div",21),e._UZ(4,"input",22),e.qZA(),e.TgZ(5,"div",21)(6,"button",4),e.NdJ("click",function(){const d=e.CHM(i).index,a=e.oxw();return e.KtG(a.onDeleteIngredient(d))}),e._uU(7,"Delete"),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let g=(()=>{class t{constructor(i,n,c){this.route=i,this.recipeService=n,this.router=c,this.editMode=!1}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}onSubmit(){this.editMode?this.recipeService.updateRecipe(this.id,this.recipeForm.value):this.recipeService.addRecipe(this.recipeForm.value),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new o.cw({name:new o.NI(null,o.kI.required),amount:new o.NI(null,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(i){this.recipeForm.get("ingredients").removeAt(i)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}initForm(){let i="",n="",c="",d=new o.Oe([]);if(this.editMode){const a=this.recipeService.getRecipe(this.id);if(i=a.name,n=a.imagePath,c=a.description,a.ingredients)for(let h of a.ingredients)d.push(new o.cw({name:new o.NI(h.name,o.kI.required),amount:new o.NI(h.amount,[o.kI.required,o.kI.pattern(/^[1-9]+[0-9]*$/)])}))}this.recipeForm=new o.cw({name:new o.NI(i,o.kI.required),imagePath:new o.NI(n,o.kI.required),description:new o.NI(c,o.kI.required),ingredients:d})}get controls(){return this.recipeForm.get("ingredients").controls}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(s.gz),e.Y36(u.j),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],[1,"col-xs12"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6,"Save"),e.qZA(),e.TgZ(7,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(8,"Cancel"),e.qZA()()(),e.TgZ(9,"div",0)(10,"div",1)(11,"div",5)(12,"label",6),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",7),e.qZA()()(),e.TgZ(15,"div",0)(16,"div",1)(17,"div",5)(18,"label",8),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",9,10),e.qZA()()(),e.TgZ(22,"div",0)(23,"div",1),e._UZ(24,"img",11),e.qZA()(),e.TgZ(25,"div",0)(26,"div",1)(27,"div",5)(28,"label",12),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",13),e.qZA()()(),e.TgZ(31,"div",0)(32,"div",14),e.YNc(33,y,8,1,"div",15),e._UZ(34,"hr"),e.TgZ(35,"div",0)(36,"div",16)(37,"button",17),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(38,"Add Ingredient"),e.qZA()()()()()()()()),2&i){const c=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",c.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.controls)}},dependencies:[o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u,o.x0,o.CE,l.sg],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();var I=p(1300);function U(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}let w=(()=>{class t{constructor(i,n,c){this.recipeService=i,this.route=n,this.router=c}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.recipe=this.recipeService.getRecipe(this.id)})}onAddToShoppingList(){this.recipeService.AddIngredientsToShoppingList(this.recipe.ingredients)}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.recipeService.deleteRecipe(this.id),this.router.navigate(["/recipes"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.j),e.Y36(s.gz),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),e._uU(11," Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return n.onAddToShoppingList()}),e._uU(16,"To Shopping List"),e.qZA()(),e.TgZ(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,U,2,2,"li",9),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(19),e.hij(" ",n.recipe.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},dependencies:[I.w,l.sg]}),t})();var x=p(3649);let v=(()=>{class t{constructor(i,n){this.dataStorageService=i,this.recipesService=n}resolve(i,n){const c=this.recipesService.getRecipes();return 0===c.length?this.dataStorageService.fetcRecipes():c}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(x.Z),e.LFG(u.j))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const N=[{path:"",component:C,canActivate:[F],children:[{path:"",component:b},{path:"new",component:g},{path:":id",component:w,resolve:[v]},{path:":id/edit",component:g,resolve:[v]}]}];let q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz.forChild(N),s.Bz]}),t})();var k=p(4466);let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Bz,o.UX,q,k.m]}),t})()}}]);