-- CreateTable
CREATE TABLE "ciudad" (
    "codigo_ciudad" VARCHAR(20) NOT NULL,
    "nombre_ciudad" VARCHAR(20) NOT NULL,
    "codigo_pais" VARCHAR(20),

    CONSTRAINT "ciudad_pkey" PRIMARY KEY ("codigo_ciudad")
);

-- CreateTable
CREATE TABLE "competencia" (
    "codigo_competencia" VARCHAR(20) NOT NULL,
    "fecha_finalizacion" DATE NOT NULL,
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin_ins" DATE NOT NULL,
    "fecha_inicio_ins" DATE NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "categoria" VARCHAR(20),
    "numero_equipos" INTEGER,

    CONSTRAINT "competencia_pkey" PRIMARY KEY ("codigo_competencia")
);

-- CreateTable
CREATE TABLE "credencial" (
    "codigo_credencial" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "token" VARCHAR(200) NOT NULL,
    "username" VARCHAR(20),

    CONSTRAINT "credencial_pkey" PRIMARY KEY ("codigo_credencial","correo")
);

-- CreateTable
CREATE TABLE "equipo" (
    "codigo_equipo" VARCHAR(20) NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "equipo_pkey" PRIMARY KEY ("codigo_equipo")
);

-- CreateTable
CREATE TABLE "equipo_competencia" (
    "codigo_equipo" VARCHAR(20) NOT NULL,
    "codigo_competencia" VARCHAR(20) NOT NULL,

    CONSTRAINT "equipo_competencia_pkey" PRIMARY KEY ("codigo_equipo","codigo_competencia")
);

-- CreateTable
CREATE TABLE "pais" (
    "codigo_pais" VARCHAR(20) NOT NULL,
    "nombre_pais" VARCHAR(20) NOT NULL,

    CONSTRAINT "pais_pkey" PRIMARY KEY ("codigo_pais")
);

-- CreateTable
CREATE TABLE "permiso" (
    "codigo_permiso" VARCHAR(20) NOT NULL,
    "entidad" VARCHAR(20) NOT NULL,
    "c" BOOLEAN NOT NULL,
    "r" BOOLEAN NOT NULL,
    "u" BOOLEAN NOT NULL,
    "d" BOOLEAN NOT NULL,

    CONSTRAINT "permiso_pkey" PRIMARY KEY ("codigo_permiso")
);

-- CreateTable
CREATE TABLE "rol" (
    "codigo_rol" VARCHAR(20) NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(100),

    CONSTRAINT "rol_pkey" PRIMARY KEY ("codigo_rol")
);

-- CreateTable
CREATE TABLE "rol_permiso" (
    "codigo_permiso" VARCHAR(20) NOT NULL,
    "codigo_rol" VARCHAR(20) NOT NULL,

    CONSTRAINT "rol_permiso_pkey" PRIMARY KEY ("codigo_permiso","codigo_rol")
);

-- CreateTable
CREATE TABLE "universidad" (
    "codigo_universidad" VARCHAR(20) NOT NULL,
    "nombre_universidad" VARCHAR(50) NOT NULL,
    "codigo_ciudad" VARCHAR(20),

    CONSTRAINT "universidad_pkey" PRIMARY KEY ("codigo_universidad")
);

-- CreateTable
CREATE TABLE "usuario" (
    "correo" VARCHAR(100) NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido" VARCHAR(50) NOT NULL,
    "descripcion" VARCHAR(300),
    "codigo_universidad" VARCHAR(20),
    "codigo_rol" VARCHAR(20),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("correo")
);

-- CreateTable
CREATE TABLE "usuario_equipo" (
    "codigo_equipo" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,

    CONSTRAINT "usuario_equipo_pkey" PRIMARY KEY ("codigo_equipo","correo")
);

-- CreateIndex
CREATE UNIQUE INDEX "credencial_username_key" ON "credencial"("username");

-- AddForeignKey
ALTER TABLE "ciudad" ADD CONSTRAINT "ciudad_codigo_pais_fkey" FOREIGN KEY ("codigo_pais") REFERENCES "pais"("codigo_pais") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "credencial" ADD CONSTRAINT "credencial_correo_fkey" FOREIGN KEY ("correo") REFERENCES "usuario"("correo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipo_competencia" ADD CONSTRAINT "equipo_competencia_codigo_competencia_fkey" FOREIGN KEY ("codigo_competencia") REFERENCES "competencia"("codigo_competencia") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "equipo_competencia" ADD CONSTRAINT "equipo_competencia_codigo_equipo_fkey" FOREIGN KEY ("codigo_equipo") REFERENCES "equipo"("codigo_equipo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rol_permiso" ADD CONSTRAINT "rol_permiso_codigo_permiso_fkey" FOREIGN KEY ("codigo_permiso") REFERENCES "permiso"("codigo_permiso") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rol_permiso" ADD CONSTRAINT "rol_permiso_codigo_rol_fkey" FOREIGN KEY ("codigo_rol") REFERENCES "rol"("codigo_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "universidad" ADD CONSTRAINT "universidad_codigo_ciudad_fkey" FOREIGN KEY ("codigo_ciudad") REFERENCES "ciudad"("codigo_ciudad") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_codigo_rol_fkey" FOREIGN KEY ("codigo_rol") REFERENCES "rol"("codigo_rol") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_codigo_universidad_fkey" FOREIGN KEY ("codigo_universidad") REFERENCES "universidad"("codigo_universidad") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_equipo" ADD CONSTRAINT "usuario_equipo_codigo_equipo_fkey" FOREIGN KEY ("codigo_equipo") REFERENCES "equipo"("codigo_equipo") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "usuario_equipo" ADD CONSTRAINT "usuario_equipo_correo_fkey" FOREIGN KEY ("correo") REFERENCES "usuario"("correo") ON DELETE NO ACTION ON UPDATE NO ACTION;
