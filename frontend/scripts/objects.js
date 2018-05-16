function Database(mid, host, type, version, config) {
    this.midhostconfig = new MidHostConfig(mid, host, config);
    this.type = type;
    this.version = version;
}

function Config(user, password, charset, timeout) {
    this.user = user;
    this.password = password;
    this.charset = charset;
    this.timeout = timeout;
}

function MidHostConfig(mid, host, config) {
    this.mid = mid;
    this.host = host;
    this.config = config;
}

function Terminal(post, kgp, gui_version, windows, services) {
    this.post = post;
    this.kgp = kgp;
    this.gui_version = gui_version;
    this.windows = windows;
    this.services = services;
}

function Service(mid, host, databases, service, config) {
    this.midhostconfig = new MidHostConfig(mid, host, config);
    this.databases = databases;
    this.service = service;
}

function Windw(win, name, fiscal, card, printer, barcode, weight) {
    this.win = win;
    this.name = name;
    this.fiscal = fiscal;
    this.card = card;
    this.printer = printer;
    this.barcode = barcode;
    this.weight = weight;
}

function Transaction(config, databases, mid, host, service) {
    this.midhostconfig = config;
    this.databases = databases;
    this.host = host;
    this.mid = mid;
    this.service = service;
}

function Transport(config, databases, host, mid) {
    this.midhostconfig = new MidHostConfig(mid, host, config);
    this.databases = databases;
}