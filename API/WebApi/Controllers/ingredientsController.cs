using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DATA.EF;
using WebApi.DTO;


namespace WebApi.Controllers
{
    public class ingredientsController : ApiController
    {
        // GET api/<controller>
        public List<IngredientsDto> Get()
        {
            bgroup19_test2Entities db = new bgroup19_test2Entities();
            
            var ingredients = db.ingredients.Select(ing => new IngredientsDto()
            {
                id = ing.id,
                name = ing.name,
                image = ing.image,
                calories = ing.calories
            }).ToList();

            return ingredients;
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] ingredient ingredient)
        {
            try
            {
                bgroup19_test2Entities db = new bgroup19_test2Entities();

                db.ingredients.Add(ingredient);
                db.SaveChanges();
                return Created(new Uri(Request.RequestUri.AbsoluteUri + ingredient.id), ingredient);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}