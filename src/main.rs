extern crate actix_web;
use std::path::PathBuf;
use actix_web::{server, App, HttpRequest, HttpResponse, Path, http, Result, fs::NamedFile};

fn sanity_check(_req: &HttpRequest) -> &'static str {
    "Server is successfully running!"
}

fn admin(req: &HttpRequest) -> Result<NamedFile>{
    let path: PathBuf = req.match_info().query("tail")?;
    let mut p = path.into_os_string().into_string().unwrap();
    if p == "admin" {
        p = String::from("index.html");
    }
    Ok(NamedFile::open(format!("static/admin/{}", p))?)
}

fn main() {
    let server = server::new(|| {
        vec![
            App::new()
                .prefix("/admin")
                .resource("/", |r| r.method(http::Method::GET).f(admin))
                .resource(r"/{tail:.*}", |r| r.method(http::Method::GET).f(admin)),
            App::new()
                .prefix("/login")
                .resource("/", |r| r.f(|_r| HttpResponse::Ok())),
            App::new()
                .resource("/", |r| r.method(http::Method::GET).f(sanity_check)),
        ]
    });

    server
    .bind("127.0.0.1:8000").unwrap()
    .run()
}