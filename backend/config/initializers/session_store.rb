if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_LLYG', domain: 'localhost'
else
    Rails.application.config.session_store :cookie_store, key: '_LLYG' 
end

