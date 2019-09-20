using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NCLASES.Controllers
{
    public class MateriasController : Controller
    {
        // GET: Materias
        public ActionResult Materias(string Menu)
        {
            ViewBag.Menu = Menu;
            return View();
        }
    }
}