using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DATA.EF;
using WebApi.DTO;

namespace WebApi.Controllers
{
    public class recipesController : ApiController
    {
        // GET api/<controller>
        public List<RecipeDto> Get()
        {
            bgroup19_test2Entities db = new bgroup19_test2Entities();

            List<RecipeDto> recipes = db.recipes.Select(rec => new RecipeDto()
            {
                id = rec.id,
                name = rec.name,
                image = rec.image,
                cookingMethod = rec.cookingMethod,
                time = rec.time,
                ingredients = rec.ingredients.Select(ing => new IngredientsDto()
                {
                    id = ing.id,
                    name = ing.name,
                    image = ing.image,
                    calories = ing.calories
                }).ToList()

            }).ToList();

            return recipes;
        }

        [EnableCors("*", "*", "*")]
        // POST api/<controller>
        public IHttpActionResult Post([FromBody] recipe recipe)
        {
            try
            {
                bgroup19_test2Entities db = new bgroup19_test2Entities();

                db.recipes.Add(recipe);
                foreach (ingredient ingredient in recipe.ingredients)
                {
                    db.Entry(ingredient).State = EntityState.Unchanged;
                }
                db.SaveChanges();
                return Created(new Uri(Request.RequestUri.AbsoluteUri + recipe.id), recipe);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}