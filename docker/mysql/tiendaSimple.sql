-- MySQL Script generated by MySQL Workbench
-- Wed Apr  5 16:20:07 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mitienda
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mitienda` ;

-- -----------------------------------------------------
-- Schema mitienda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mitienda` DEFAULT CHARACTER SET utf8 ;
USE `mitienda` ;

-- -----------------------------------------------------
-- Table `mitienda`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mitienda`.`productos` (
  `idproducto` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `precio` DECIMAL(10,2) UNSIGNED NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `create_date` DATE NOT NULL,
  PRIMARY KEY (`idproducto`),
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mitienda`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mitienda`.`pedidos` (
  `idpedido` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email_user` VARCHAR(45) NOT NULL,
  `date` DATETIME NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpedido`),
  UNIQUE INDEX `idpedido_UNIQUE` (`idpedido` ASC) ,
  UNIQUE INDEX `email_user_UNIQUE` (`email_user` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mitienda`.`pedidos_has_productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mitienda`.`pedidos_has_productos` (
  `idpedido` INT UNSIGNED NOT NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  `cantidad` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idpedido`, `idproducto`),
  INDEX `fk_pedidos_has_productos_productos1_idx` (`idproducto` ASC) ,
  INDEX `fk_pedidos_has_productos_pedidos1_idx` (`idpedido` ASC) ,
  CONSTRAINT `fk_pedidos_has_productos_pedidos1`
    FOREIGN KEY (`idpedido`)
    REFERENCES `mitienda`.`pedidos` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_productos_productos1`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mitienda`.`productos` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mitienda`.`wishlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mitienda`.`wishlist` (
  `idtable` INT NOT NULL,
  `email_user` VARCHAR(45) NOT NULL,
  `idproducto` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idtable`),
  INDEX `fk_wishlist_productos1_idx` (`idproducto` ASC) ,
  CONSTRAINT `fk_wishlist_productos1`
    FOREIGN KEY (`idproducto`)
    REFERENCES `mitienda`.`productos` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
