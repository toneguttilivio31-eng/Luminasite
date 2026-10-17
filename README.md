# Lumina Platform

Application web React/Vite avec deux espaces distincts :
- **Lumina Product Studio** : présentation des services et offres publicitaires.
- **Lumina Growth** : authentification Supabase, produits sauvegardés, campagnes et relevés de résultats.

## Fonctionnalités présentes
- Inscription et connexion par e-mail/mot de passe avec Supabase Auth.
- Session persistante.
- Produits : créer, consulter, supprimer.
- Campagnes : créer, consulter, supprimer, associer à un produit, stocker plateforme, objectif, texte et statut.
- Résultats : saisir et consulter vues, clics, contacts, ventes, chiffre d'affaires et dépenses.
- Recommandation de prochaine étape basée sur les données disponibles, sans prétendre récupérer automatiquement les données des réseaux sociaux.
- Interface responsive et pages séparées Product Studio / Growth.

## Configuration locale
Le fichier `.env` est prérempli avec l'URL du projet et la clé publique fournie pour ce projet. Ne jamais y mettre une clé `sb_secret_` ou `service_role`.

```bash
npm install
npm run dev
```

## Configuration Netlify
Dans Netlify > Site configuration > Environment variables, ajouter :
- `VITE_SUPABASE_URL` = URL du projet Supabase
- `VITE_SUPABASE_PUBLISHABLE_KEY` = clé publique `sb_publishable_...`

Build command : `npm run build`
Publish directory : `dist`

Après modification des variables, déclencher un nouveau déploiement.

## Supabase
Le script SQL initial doit avoir été exécuté dans SQL Editor. Il crée les tables `profiles`, `products`, `campaigns`, `campaign_metrics` et `growth_tasks`, avec RLS. Dans Authentication > URL Configuration, configure l'URL du site de production dans Site URL et les URL de redirection autorisées.

## Limites actuelles à connaître
- Les données de campagnes et de résultats sont saisies manuellement ; aucune connexion Instagram/TikTok/Meta n'est incluse.
- Les images produit ne sont pas encore téléversées vers Supabase Storage.
- Les demandes de devis ne sont pas encore envoyées à un backend ou à une boîte e-mail.
- Le site n'est pas publié automatiquement par ce ZIP : il faut le déployer sur Netlify.
- Une confirmation d'e-mail peut être requise selon les réglages Supabase.

## Assistant Lumina (optionnel)
Le widget de chat utilise une FAQ locale de secours. Pour activer les réponses génératives, ajouter `GEMINI_API_KEY` dans Netlify > Site configuration > Environment variables. La clé doit rester côté serveur et ne doit jamais être ajoutée à `VITE_*`, au dépôt public ou au code du navigateur. Google AI Pro n'implique pas automatiquement un quota API gratuit ; vérifier la disponibilité et les conditions de l'API Google avant activation. Sans cette variable, le widget répond avec une FAQ de première orientation et indique que le moteur IA n'est pas configuré.

## Promotion de lancement
Le site affiche les conditions prévues : 14 jours à compter du lancement officiel et au maximum 10 commandes payées et confirmées, selon la première limite atteinte. Le compte à rebours et le compteur de places ne sont volontairement pas affichés tant qu'une date de lancement fixe et un suivi fiable des commandes confirmées ne sont pas configurés. Ne pas annoncer la promotion comme active avant cette configuration.

## Tarifs affichés
Les tarifs de lancement affichés sont Essentials 59 €, Campaign 119 €, Boutique 199 €. Les tarifs standards indiqués (79 €, 159 €, 269 €) sont des tarifs prévus après lancement, pas des prix historiques. Monthly est indiqué à partir de 299 €/mois et doit être confirmé après mesure du temps de production. La vidéo Campaign doit être confirmée uniquement si elle peut être produite sans coût supplémentaire.
