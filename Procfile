web: php artisan serve --host=0.0.0.0 --port=$PORT
web: touch /app/database/database.sqlite && chmod -R 775 storage bootstrap/cache && php artisan migrate --force && php artisan config:cache && php artisan route:cache && php artisan serve --host=0.0.0.0 --port=$PORT --no-reload
web: npm ci && npm run build && touch /app/database/database.sqlite && php artisan migrate --force && php artisan config:cache && php artisan route:cache && php artisan serve --host=0.0.0.0 --port=$PORT --no-reload
