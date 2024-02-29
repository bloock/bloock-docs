import os
import bloock

api_key = os.getenv("API_KEY")
if api_key is None:
    raise Exception

bloock.api_key = api_key

