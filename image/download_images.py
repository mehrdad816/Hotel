import os
import requests
from urllib.parse import urlparse, parse_qs

# لیست همه URLهای عکس (از فایل‌های html استخراج شده)
image_urls = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511745939592-5a8b87880c61?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1509228468518-c5eeecbff44a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
]

def get_filename_from_url(url, idx):
    parsed = urlparse(url)
    name = os.path.basename(parsed.path)
    if not name:
        name = f"image_{idx+1}"
    if not name.lower().endswith('.jpg'):
        name += '.jpg'
    return name

def download_images(urls, save_dir):
    os.makedirs(save_dir, exist_ok=True)
    for idx, url in enumerate(urls):
        filename = get_filename_from_url(url, idx)
        filepath = os.path.join(save_dir, filename)
        print(f"Downloading {url} -> {filepath}")
        try:
            resp = requests.get(url, timeout=20)
            resp.raise_for_status()
            with open(filepath, 'wb') as f:
                f.write(resp.content)
        except Exception as e:
            print(f"Failed to download {url}: {e}")

if __name__ == "__main__":
    download_images(image_urls, '.') 