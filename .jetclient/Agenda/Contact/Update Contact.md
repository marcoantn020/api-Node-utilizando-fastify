```toml
name = 'Update Contact'
method = 'PUT'
url = '{{globals.baseUrl}}/contacts/16a1f953-e24f-42de-8791-1e7b106ebb3c'
sortWeight = 3000000
id = 'ce2ae1db-22fe-429d-99e5-58db06bcf3a6'

[[headers]]
key = 'email'
value = 'marco@marco.com'

[body]
type = 'JSON'
raw = '''
{
  "name": "Ana Beatriz",
  "email": "ana@beatriz.com",
  "phone": "17 97777 0000"
}'''
```
