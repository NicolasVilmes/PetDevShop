import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  res.render('Pages/main', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  });
}

export const dogs = (req: Request, res: Response) => {
  res.render('Pages/main', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    }
  });
}


export const cats = (req: Request, res: Response) => {
  res.render('Pages/main', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    }
  });
}

export const fishes = (req: Request, res: Response) => {
  res.render('Pages/main', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    }
  });
}