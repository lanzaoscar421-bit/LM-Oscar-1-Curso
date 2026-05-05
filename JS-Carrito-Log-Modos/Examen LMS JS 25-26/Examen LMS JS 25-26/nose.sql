drop database if exists mangako;
create database mangako;
use mangako;

create table usuario (
	id_usuario int primary key auto_increment,
    nombre varchar(30),
    apellido varchar(40),
    email varchar(40),
    dni char(9),
    direccion varchar(100),
    fecha_nacimiento date
);

create table tipo (
	id_tipo int primary key auto_increment,
    nombre_tipo varchar(30)
);

create table editorial (
	id_editorial int primary key auto_increment,
    nombre varchar(50),
    fecha_creacion date
);

create table libro (
	id_libro int primary key auto_increment,
	nombre varchar(30),
    autor varchar(50),
    isbn char(13),
    fecha_publicacion date,
    stock smallint unsigned,
    precio decimal(5,2),
    id_tipo int,
    id_editorial int,
    foreign key (id_tipo) references tipo (id_tipo),
    foreign key (id_editorial) references editorial (id_editorial)
);

create table alquiler (
	id_alquiler int primary key auto_increment,
    fecha_inicio date,
    fecha_fin date,
    estado enum('activo','devuelto','retrasado'),
    importe decimal(5,2),	
    id_libro int,
    id_usuario int,
    foreign key (id_libro) references libro (id_libro),
    foreign key (id_usuario) references usuario (id_usuario)
);

create table multa (
	id_multa int primary key auto_increment,
    descripcion varchar(100),
    importe decimal(5,2),
    id_alquiler int,
    foreign key (id_alquiler) references alquiler (id_alquiler)
);

create table venta (
	id_venta int primary key auto_increment,
    fecha_venta date,
    cantidad smallint unsigned,
    precio_venta decimal(5,2),
    id_libro int,
    id_usuario int,
    foreign key (id_libro) references libro (id_libro),
    foreign key (id_usuario) references usuario (id_usuario)
);