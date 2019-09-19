using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NCLASES.Controllers
{
    public class NoticiasController : Controller
    {
        // GET: Noticias
        public ActionResult Noticias()
        {
            return View();
        }

        public ActionResult DetalleNoticias(int id)
        {
            ViewBag.id = id;
            return View();
        }
    }
}