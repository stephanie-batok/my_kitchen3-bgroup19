using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.DTO
{
    public class RecipeDto
    {
        public int id;
        public string name;
        public string image;
        public string cookingMethod;
        public int? time;
        public List<IngredientsDto> ingredients;
    }
}