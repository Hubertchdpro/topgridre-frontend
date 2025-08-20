/*  app/api/contact/route.ts : define a server endpoint to handle post method from api/contact*/

// a provide method given by nextjs to send json or redirect responses
import { NextResponse } from 'next/server';

// disable cache  because contact forms usualy send data and we dont want  cache response
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // 1. Récupérer et parser les données du formulaire
    const formData = await request.json();
    const { name, email, company, roleType , message } = formData;

    // 2. Validation basique des données (crucial !)
    if (!name ||  !email || !message || !roleType) {
      return NextResponse.json(
        { error: 'Les champs name, email, roleType et message are requiede.' },
        { status: 400 } // Code HTTP 400: Bad Request
      );
    }

    // logic metier: what do we do with data ?
    //save in data base or send and email to admin

    //exemple
    console.log("we have receive a new contact asking :",{
        name,
        email,
        company,
        roleType,
        message,

    })

    // 5. Répondre avec un succès
    return NextResponse.json(
      { message: 'Votre message a été envoyé avec succès. Un expert vous contactera bientôt.' },
      { status: 201 } // Code HTTP 201: Created
    );

  } catch (error) {
    // 6. Gestion des erreurs inattendues (problème de base de données, etc.)
    console.error('Erreur dans l\'endpoint /api/contact:', error);

    return NextResponse.json(
      { error: 'Une erreur interne du serveur s\'est produite. Veuillez réessayer plus tard.' },
      { status: 500 } // Code HTTP 500: Internal Server Error
    );
  }
}
